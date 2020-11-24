const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');


exports.getTests = (req, res, next) =>{
    res.status(200).json({
        posts: [{
            title: 'First post',
            content: 'This is the first post !'
        }]
    });
}

exports.createSession = (req, res, next) =>{
    const assistant = new AssistantV2({
        version: '2019-02-28',
        authenticator: new IamAuthenticator({
            apikey: process.env.IBM_KEY,
        }),
        url: 'https://gateway-lon.watsonplatform.net/assistant/api',
        disableSslVerification: true,
    });


    assistant.createSession({
        assistantId:  process.env.IBM_ASSISTANT
    })
    .then(res => {
        console.log(JSON.stringify(res, null, 2));
    })
    .catch(err => {
        console.log(err);
    });
}


exports.callWatson = (req, re, next) =>{

    const assistant = new AssistantV2({
        version: '2019-02-28',
        authenticator: new IamAuthenticator({
            apikey: process.env.IBM_KEY,
        }),
        url: 'https://gateway-lon.watsonplatform.net/assistant/api',
        disableSslVerification: true,
    });



    assistant.message({
        assistantId: process.env.IBM_ASSISTANT,
        sessionId: 'adf945d7-595c-40e8-b45b-5151ced2ec16',
        input: {
            'message_type': 'text',
            'text': req.body.data.question
        }
    })
        .then(res => {
            console.log(JSON.stringify(res, null, 2));
            re.status(201).json({
                message: 'IBM',
                answer: res.result.output.generic[0].text,
            })
        })
        .catch(err => {
            console.log(err);
        });
}



