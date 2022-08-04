export const authEndpoint = "https://accounts.spotify.com/authorize";

export const clientId = "03a640aba3b142cf905c7728be480a5a";
export const redirectUri = window.location.href + "redirect";
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];
