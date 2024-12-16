<script>
    let messages = [];
    let input = '';

    function sendMessage() {
        if (input.trim()) {
            messages = [...messages, input];
            input = '';
        }
    }
</script>

<style>
    .chat-container {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        width: 80%;
        max-width: 600px;
        padding: 20px;
    }

    .message {
        background: #f0f0f0;
        border-radius: 5px;
        padding: 10px;
        margin: 5px 0;
    }

    .user-message {
        background: #d1e7fd;
        margin-left: auto;
    }
</style>

<div class="chat-container">
    {#each messages as message, index}
        <div class="message {index % 2 ? 'user-message' : ''}">{message}</div>
    {/each}
    <input bind:value={input} type="text" on:keypress="{e => e.key === 'Enter' && sendMessage()}" />
    <button on:click={sendMessage}>Send</button>
</div>
