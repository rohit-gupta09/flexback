CREATE DATABASE flexmoney

CREATE TABLE user(
  id SERIAL PRIMARY KEY,
  Phone NUMERIC,
  User_Name TEXT,
  age INTEGER,
  selected_batch TEXT
)

CREATE TABLE Participants (
    ParticipantID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    DateOfBirth DATE NOT NULL,
    ContactInfo VARCHAR(255)
);


CREATE TABLE Batch(
    BatchID SERIAL PRIMARY KEY,
    TimeSlot VARCHAR(100) NOT NULL
)

INSERT INTO BATCH ("6-7AM");

CREATE TABLE Enrollment(
    EnrollmentID SERIAL PRIMARY KEY,
    ParticipantID INT NOT NULL,
    Month VARCHAR(20) NOT NULL,
    BatchID INT NOT NULL,
    FOREIGN KEY (ParticipantID) REFERENCES Participants(ParticipantID),
    FOREIGN KEY (BatchID) REFERENCES Batch(BatchID)
)

CREATE TABLE Payment(
    PaymentID SERIAL PRIMARY KEY,
    EnrollmentID INT NOT NULL,
    DatePaid Date NOT NULL,
    Amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (EnrollmentID) REFERENCES Enrollment(EnrollmentID)
)