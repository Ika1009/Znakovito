<?php

require_once 'db_conn.php';

// Get POST data
$korisnicko_ime = $_POST['korisnicko_ime'];
$lozinka = $_POST['lozinka'];
$ime = $_POST['ime'];
$prezime = $_POST['prezime'];
$email = $_POST['email'];
$maticni_jezik = $_POST['maticni_jezik'];

// Array of image URLs that we have uploaded on our server, for now image is randomly generated
$image_urls = array(
    'https://bonanza.rs/fon/images/1.png',
    'https://bonanza.rs/fon/images/2.png',
    'https://bonanza.rs/fon/images/3.png',
    'https://bonanza.rs/fon/images/4.png',
);

// Generate a random index to select a random image URL
$random_index = rand(0, count($image_urls) - 1);
$slika_url = $image_urls[$random_index];

try {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO Korisnici (korisnicko_ime, lozinka, ime, prezime, email, maticni_jezik, slika_url) VALUES (:korisnicko_ime, :lozinka, :ime, :prezime, :email, :maticni_jezik, :slika_url)");

    // Bind parameters
    $stmt->bindParam(':korisnicko_ime', $korisnicko_ime);
    $stmt->bindParam(':lozinka', $lozinka);
    $stmt->bindParam(':ime', $ime);
    $stmt->bindParam(':prezime', $prezime);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':maticni_jezik', $maticni_jezik);
    $stmt->bindParam(':slika_url', $slika_url);

    // Execute the prepared statement
    $stmt->execute();

    // User signup successful
    echo "User signed up successfully";
} catch(PDOException $e) {
    // Error handling
    echo "Error: " . $e->getMessage();
}

// Close connection
$conn = null;

?>
