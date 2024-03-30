Da biste ažurirali sesijske promenljive kada se korisnik ažurira, možete dodati kod za postavljanje sesijskih promenljivih nakon uspešnog ažuriranja profila. Evo kako to može izgledati:

```php
<?php

require_once 'db_conn.php';

// Get POST data
$id_korisnika = $_POST['id_korisnika']; // Assuming this is the user ID
$korisnicko_ime = $_POST['korisnicko_ime'];
$ime = $_POST['ime'];
$prezime = $_POST['prezime'];
$email = $_POST['email'];
$maticni_jezik = $_POST['maticni_jezik'];

try {
    // Prepare the SQL statement to update user profile
    $stmt = $conn->prepare("UPDATE Korisnici SET korisnicko_ime = :korisnicko_ime, ime = :ime, prezime = :prezime, email = :email, maticni_jezik = :maticni_jezik WHERE id_korisnika = :id_korisnika");

    // Bind parameters
    $stmt->bindParam(':id_korisnika', $id_korisnika);
    $stmt->bindParam(':korisnicko_ime', $korisnicko_ime);
    $stmt->bindParam(':ime', $ime);
    $stmt->bindParam(':prezime', $prezime);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':maticni_jezik', $maticni_jezik);

    // Execute the prepared statement
    $stmt->execute();

    // Check if any rows were affected
    $rows_affected = $stmt->rowCount();

    if ($rows_affected > 0) {
        // Profile updated successfully
        echo "Profil uspesno azuriran";

        // Update session variables
        $_SESSION['id_korisnika'] = $id_korisnika;
        $_SESSION['korisnicko_ime'] = $korisnicko_ime;
        $_SESSION['ime'] = $ime;
        $_SESSION['prezime'] = $prezime;
        $_SESSION['email'] = $email;
        $_SESSION['maticni_jezik'] = $maticni_jezik;
    } else {
        // No rows updated, likely due to user not found
        echo "Pogresan ID unos";
    }
} catch(PDOException $e) {
    // Error handling
    echo "Greska: " . $e->getMessage();
}

// Close connection
$conn = null;

?>
```

Ovaj kod će ažurirati sesijske promenljive sa novim vrednostima koje je korisnik uneo. Ako imate još pitanja, slobodno ih postavite.

Source: Conversation with Bing, 3/30/2024
(1) github.com. https://github.com/nenad014/PDO/tree/e75e6b2ca06e7b1a0e0f73e857884bd82f041f7a/preparedStatement1.php.
