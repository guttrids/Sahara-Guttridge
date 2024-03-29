var messages = [];

var messageType = 
{
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message',
    response: 'meow'
};
function Message(type,user,message)
{
    this.message = message;
    this.user = user;
    this.type = type;

}
function messageElement(message)
{
    var messageText = document.createTextNode(message.user + ': ' + message.message);
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);
    messageEl.className = message.type;

    return messageEl;


}

function messageHandler(event)
{
    var user,
        type,
        messageInput = document.getElementById('message-input'),
        messageContianerEl = document.getElementById('message-container');

        switch(event.target.id)
        {
            case 'send-button':
                user = 'Sahara';
                type = messageType.out;
                break;
            case 'reply-button':
                user = 'Mike';
                type = messageType.in;
                break;
            
            default:
                user ='unknown';
                type = messageType.unknown;
                    
            }
        

            if(messageInput.value != '')
            {
                var message = new Message(type, user, messageInput.value);
                messages.push(message);
                var el = messageElement(message);
                messageContianerEl.appendChild(el);
                messageInput.value = '';
            }

        }
        function Meow(event)
        {
            var user = 'Linus',
                type = messageType.response,
                 msg = "MEOW",
            messageContianerEl = document.getElementById('message-container');
            var message = new Message(type,user,msg)
            messages.push(message);
            var el = messageElement(message);
            messageContianerEl.appendChild(el);
                
           


        }

            var init = function()
            {
                document.getElementById('send-button').onclick = messageHandler;
                document.getElementById('reply-button').onclick = messageHandler;
                document.getElementById('meow-button').onclick = Meow;
            }


            init();
