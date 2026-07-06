async function getAIResponse(message) {

    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + API_KEY,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: message
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();

  console.log(JSON.stringify(data, null, 2));

    return data.candidates[0].content.parts[0].text;
}

async function sendMessage() {

    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let message = input.value;

    if (message == "") {
        alert("Pehle kuch likhiye!");
        return;
    }

    // User Message
    chatBox.innerHTML += "<p><b>You:</b> " + message + "</p>";
    input.value = "";

    // AI Soch Raha Hai...
    chatBox.innerHTML += "<p id='loading'><b>AI:</b> Soch raha hoon...</p>";
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        let aiReply = await getAIResponse(message);

        document.getElementById("loading").remove();

        chatBox.innerHTML += "<p><b>AI:</b> " + aiReply + "</p>";
    } catch (error) {
        document.getElementById("loading").remove();

        chatBox.innerHTML += "<p><b>AI:</b> Error! AI se connect nahi ho paya.</p>";
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}
