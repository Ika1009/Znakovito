<?php
// Check if the user is logged in
if (!isset($_SESSION['id_korisnika'])) {
    echo "Korisnik nije prijavljen.";
    header("Location: login.php"); // Replace with your login page URL
    exit;
}

// Include your database connection
require 'db_conn.php';

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Get the user ID from the session
    $id_korisnika = $_SESSION['id_korisnika'];

    // Prepare the SQL query to get all messages from the user
    $stmt = $conn->prepare("SELECT * FROM Poruke WHERE id_posiljaoca = ? OR id_primaoca = ?");
    $stmt->bind_param("ii", $id_korisnika, $id_korisnika);

    // Execute the prepared statement
    $stmt->execute();

    // Get the result of the query
    $result = $stmt->get_result();

    // Fetch all rows as an associative array
    $messages = $result->fetch_all(MYSQLI_ASSOC);

    // Output the messages as JSON
    echo json_encode($messages);
} else {
    // The request method is not GET
    echo "Invalid request.";
}

// Close the database connection at the end
$conn->close();
?>
