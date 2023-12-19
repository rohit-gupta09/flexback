const express=require('express')
const app=express()
const cors=require('cors')
const pool=require('./database')

app.use(cors())
app.use(express.json())

app.post('/api/enroll', async (req, res) => {
    try {

        console.log("trigger")
     
      console.log(req.body)
      const { name, dateOfBirth, contactInfo, selectedBatch } = req.body;

      // Basic validations
      if (!name || !dateOfBirth || !contactInfo || !selectedBatch) {
        return res.status(400).send('Missing required fields');
      }

      const batchID=await pool.query('SELECT BatchID FROM Batch b  WHERE b.TimeSlot = $1',
      [selectedBatch])
      console.log(batchID.rows[0].batchid)
      
      // Age validation
      const age = calculateAge(dateOfBirth);
      if (age < 18 || age > 65) {
        return res.status(400).send('Invalid age. Must be between 18 and 65.');
      }
  
    
      
      const isEnrolled = await checkEnrollment(name);
      console.log(isEnrolled)
      if (isEnrolled) {
        return res.status(400).send('Participant is already enrolled for the current month.');
      }
  
      
      const participantResult = await pool.query(
        'INSERT INTO Participants (Name, DateOfBirth, ContactInfo) VALUES ($1, $2, $3) RETURNING ParticipantID',
        [name, dateOfBirth, contactInfo]
      );
  
      const participantId = participantResult.rows[0].participantid;
  
     
      const enrollmentResult = await pool.query(
        'INSERT INTO Enrollment (ParticipantID, Month, BatchID) VALUES ($1, $2, $3) RETURNING EnrollmentID',
        [participantId, new Date().toLocaleDateString('en-US', { month: 'long' }), batchID.rows[0].batchid]
      );

      
  
      const enrollmentId = enrollmentResult.rows[0].enrollmentid;

      const paymentResponse = CompletePayment({ participantId, enrollmentId }); 
  
      
      res.json({ success: paymentResponse });
    } catch (error) {
      console.error('Error processing enrollment:', error);
      res.status(500).send('Server error');
    }
  });
  

  function calculateAge(dateOfBirth) {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    return currentDate.getFullYear() - birthDate.getFullYear();
  }
  
 

  async function checkEnrollment(name) {
    const result = await pool.query(
      'SELECT * FROM Participants p JOIN Enrollment e ON p.ParticipantID = e.ParticipantID WHERE p.Name = $1 AND e.Month = $2',
      [name, new Date().toLocaleDateString('en-US', { month: 'long' })]
    );
  
    return result.rows.length > 0;
  }
  
  function CompletePayment({ participantId, enrollmentId }) {
    return true;
  }

app.post("/create",async(req,res)=>{
    try{
        console.log(req.body);
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(5000,()=>{
    console.log("Server has started on port 5000 ")
})