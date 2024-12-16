<template>
    <div class="chat-container">
        <div v-for="(message, index) in messages" :key="index" :class="['message', index % 2 ? 'user-message' : '']">
            {{ message }}
        </div>
        <input v-model="input" @keypress.enter="sendMessage" type="text" />
        <button @click="sendMessage">Send</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            input: ''
        }
    },
    methods: {
        sendMessage() {
            if (this.input.trim()) {
                this.messages.push(this.input);
                this.input = '';
            }
        }
    }
}
</script>

<style scoped>
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
