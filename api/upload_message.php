<?php
// Uključite konekciju na bazu podataka na vrhu
require 'db_conn.php';

// Proverite da li je metoda zahteva POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Preuzmite podatke o poruci iz POST zahteva
    $id_posiljaoca = $_POST['id_posiljaoca'];
    $id_primaoca = $_POST['id_primaoca'];
    $tekst_poruke = $_POST['tekst_poruke'];

    // Pripremite SQL upit za unos poruke u bazu podataka
    $stmt = $conn->prepare("INSERT INTO Poruke (id_posiljaoca, id_primaoca, tekst_poruke) VALUES (?, ?, ?)");
    $stmt->bind_param("iis", $id_posiljaoca, $id_primaoca, $tekst_poruke);

    // Izvršite pripremljeni upit
    if ($stmt->execute()) {
        // Uspješno unesena poruka
        echo "Poruka uspešno poslata.";
    } else {
        // Došlo je do greške prilikom unosa poruke
        echo "Došlo je do greške: " . $stmt->error;
    }
} else {
    // Metoda zahteva nije POST
    echo "Nevažeći zahtev.";
}

// Zatvorite konekciju na bazu podataka na kraju
$conn->close();
?>
