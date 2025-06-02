window.conversationHistory = [];
const MAX_HISTORY = 7; 

function handleEnterKey(event){
    if(event.key === "Enter") {
        sendMessage();
    }
}

async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    const chatBox = document.getElementById("chat");
    const chatContainer = document.getElementById("chat-container");

    // Append user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("user-input").value = ""; 

    // Using queue to manage history
    if (window.conversationHistory.length >= MAX_HISTORY) {
        window.conversationHistory.shift(); // Removes the oldest item
    }
    
    // Add new message to history
    window.conversationHistory.push({ role: "user", parts: [{ text: userInput }] });

    // Auto scroll
    chatContainer.scrollTop = chatContainer.scrollHeight;

    const apiKey = "AIzaSyBr2XI4PGjYwmO9uiwptjTUJdSI1zzmeWs"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    
    const requestData = { contents: window.conversationHistory };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData)
        });

        const result = await response.json();
        const aiResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";

        // If AI response, append
        chatBox.innerHTML += `<p><strong>AI:</strong> ${aiResponse}</p>`;

        // Use Queue to manage history
        if (window.conversationHistory.length >= MAX_HISTORY) {
            window.conversationHistory.shift(); // Removes the oldest item
        }

        // Add AI message to history
        window.conversationHistory.push({ role: "model", parts: [{ text: aiResponse }] });

        // Auto scroll
        chatContainer.scrollTop = chatContainer.scrollHeight;
    } catch (error) {
        chatBox.innerHTML += `<p><strong>AI:</strong> Error getting response.</p>`;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}
