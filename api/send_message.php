<?php

// Check if the user is logged in
if (!isset($_SESSION['id_korisnika'])) {
    echo "Korisnik nije prijavljen.";
    header("Location: login.php"); // Replace with your login page URL
    exit;
}

// Include your database connection
require 'db_conn.php';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the user ID from the session
    $id_posiljaoca = $_SESSION['id_korisnika'];
    $id_primaoca = $_POST['id_primaoca'];
    $tekst_poruke = $_POST['tekst_poruke'];

    // Prepare the SQL query to insert the message into the database
    $stmt = $conn->prepare("INSERT INTO Poruke (id_posiljaoca, id_primaoca, tekst_poruke) VALUES (?, ?, ?)");
    $stmt->bind_param("iis", $id_posiljaoca, $id_primaoca, $tekst_poruke);

    // Execute the prepared statement
    if ($stmt->execute()) {
        // Message inserted successfully
        echo "Poruka uspešno poslata.";
    } else {
        // An error occurred while inserting the message
        echo "Došlo je do greške: " . $stmt->error;
    }
} else {
    // The request method is not POST
    echo "Nevažeći zahtev.";
}

// Close the database connection at the end
$conn->close();
?>
