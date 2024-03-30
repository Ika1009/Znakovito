<?php

require_once 'db_conn.php';

// Get POST data
$korisnicko_ime = $_POST['korisnicko_ime'];
$lozinka = $_POST['lozinka'];

try {
    // Prepare the SQL statement to fetch user data by username and password
    $stmt = $conn->prepare("SELECT * FROM Korisnici WHERE korisnicko_ime = :korisnicko_ime AND lozinka = :lozinka");

    // Bind parameters
    $stmt->bindParam(':korisnicko_ime', $korisnicko_ime);
    $stmt->bindParam(':lozinka', $lozinka);

    // Execute the prepared statement
    $stmt->execute();

    // Fetch user data
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Check if user exists and password is correct
    if ($user) {
        // Start the session upon successful login
        session_start();
        
        // Store user data in session variables
        $_SESSION['id_korisnika'] = $user['id_korisnika'];
        $_SESSION['korisnicko_ime'] = $user['korisnicko_ime'];
        $_SESSION['ime'] = $user['ime'];
        $_SESSION['prezime'] = $user['prezime'];
        $_SESSION['email'] = $user['email'];
        $_SESSION['maticni_jezik'] = $user['maticni_jezik'];

        echo "User logged in successfully";
        // You can redirect or perform other actions here
    } else {
        // User login failed
        echo "Invalid username or password";
    }
} catch(PDOException $e) {
    // Error handling
    echo "Error: " . $e->getMessage();
}

// Close connection
$conn = null;

?>
