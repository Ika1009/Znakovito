<?php
// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION['id_korisnika'])) {
    echo json_encode(array('error' => 'Korisnik nije prijavljen.'));
    exit;
}

// Include your database connection
require 'db_conn.php';

// Get the user ID from the session
$id_korisnika = $_SESSION['id_korisnika'];

// Prepare the SQL query to get all new messages for the user
$stmt = $conn->prepare("SELECT * FROM Poruke WHERE id_primaoca = ? AND procitano = FALSE");
$stmt->bind_param("i", $id_korisnika);

// Execute the prepared statement
$stmt->execute();

// Get the result of the query
$result = $stmt->get_result();

// Fetch all rows as an associative array
$messages = $result->fetch_all(MYSQLI_ASSOC);

// Output the messages as JSON
echo json_encode($messages);

// Prepare the SQL query to mark the messages as read
$stmt = $conn->prepare("UPDATE Poruke SET procitano = TRUE WHERE id_primaoca = ? AND procitano = FALSE");
$stmt->bind_param("i", $id_korisnika);

// Execute the prepared statement
$stmt->execute();

// Close the database connection
$conn->close();
?>
