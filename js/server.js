const express = require('express');
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Crea una instancia del cliente OAuth2 para verificar el token de Google ID
const CLIENT_ID = 'TU_CLIENT_ID_DE_GOOGLE';
const client = new OAuth2Client(CLIENT_ID);

app.post('/login', async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verifica el token de Google ID
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: CLIENT_ID
    });

    const payload = ticket.getPayload();
    const userid = payload['sub']; // ID único del usuario de Google
    console.log('ID de usuario:', userid);

    // Aquí puedes autenticar al usuario en tu sistema y generar un token de sesión propio

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(401).json({ error: 'Error de autenticación' });
  }
});

app.listen(PORT, () => console.log(`Servidor en ejecución en http://localhost:${PORT}`));
