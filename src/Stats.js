import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/api/token";

export default function App() {
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleLogin = async () => {
    try {
      const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString(
        "base64"
      );
      const response = await axios.post(
        SPOTIFY_AUTH_ENDPOINT,
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: `Basic ${authHeader}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const { access_token } = response.data;
      setAccessToken(access_token);
      console.log("Access Token:", access_token);
    } catch (error) {
      console.error("Failed to login to Spotify:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spotify Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Client ID"
        onChangeText={setClientId}
        value={clientId}
      />
      <TextInput
        style={styles.input}
        placeholder="Client Secret"
        onChangeText={setClientSecret}
        value={clientSecret}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {accessToken && (
        <Text style={styles.accessTokenText}>Access Token: {accessToken}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 48,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  accessTokenText: {
    fontSize: 16,
    marginTop: 16,
  },
});
