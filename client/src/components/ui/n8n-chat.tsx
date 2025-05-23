import { useEffect } from 'react';

interface N8nChatProps {
  webhookUrl: string;
}

const N8nChat = ({ webhookUrl }: N8nChatProps) => {
  useEffect(() => {
    // Load n8n chat script
    try {
      if (typeof window !== "undefined" && window.createChat) {
        // Add custom styles to enhance text visibility
        const style = document.createElement('style');
        style.textContent = `
          .chat-messages .message.from-user { 
            color: #000000 !important;
            font-weight: 600 !important;
          }
        `;
        document.head.appendChild(style);

        window.createChat({
          webhookUrl,
          i18n: {
            en: {
              title: 'Dialio Assistant',
              subtitle: "How can I help you with your communication needs today?",
              getStarted: 'Start New Conversation',
              inputPlaceholder: 'Type your question...',
            },
          },
          initialMessages: [
            'Hello! 👋',
            'I\'m your Dialio assistant. How can I help with your communication needs today?'
          ],
        });
      } else {
        console.error("Failed to load n8n chat script:", window.createChat);
      }
    } catch (error) {
      console.error("Error initializing n8n chat:", error);
    }
  }, [webhookUrl]);

  return null; // The chat widget injects itself into the DOM
};

export default N8nChat;