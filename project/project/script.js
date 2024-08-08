async function lookupZipCode() {
    const postalCode = document.getElementById('postalCode').value;
    const postalCodePattern = /^[0-9]{5}(?:-[0-9]{4})?$/; // Example for US ZIP Code

    if (!postalCodePattern.test(postalCode)) {
        document.getElementById('error').style.display = 'inline';
        document.getElementById('result').style.display = 'none';
        return;
    } else {
        document.getElementById('error').style.display = 'none';
    }

    try {
        // Fetch data from a sample API. Replace with a real API endpoint.
        const response = await fetch(`https://api.zippopotam.us/us/${postalCode}`);
        if (!response.ok) {
            throw new Error('Zip code not found');
        }

        const data = await response.json();
        const state = data.places[0]['state'];
        const district = data.places[0]['place name'];
        const pincode = data['post code'];
        const village = "Sample Village"; // Placeholder since the API does not provide village info

        // Display the results
        document.getElementById('state').innerText = state;
        document.getElementById('district').innerText = district;
        document.getElementById('pincode').innerText = pincode;
        document.getElementById('village').innerText = village;
        document.getElementById('result').style.display = 'block';

    } catch (error) {
        document.getElementById('error').innerText = error.message;
        document.getElementById('error').style.display = 'inline';
        document.getElementById('result').style.display = 'none';
    }
}
