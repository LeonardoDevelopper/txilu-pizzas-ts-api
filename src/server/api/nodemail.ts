const nodemailer = require('nodemailer');

'etde jdmp ipmt ydbo '
export default class Email {

    private userEmail : string = 'txilupizzaslda@gmail.com'
    private userPassword : string = 'etde jdmp ipmt ydbo '
    private response : any;

    private transporter = nodemailer.createTransport({
      
        service: 'gmail',
        port : 587,
        secure : false,
        auth: {
            user: this.userEmail,
            pass: this.userPassword,
        },
      });

    public sendEmail(emailDest : string, subject: string, message: string,)
    {
        const mailOptions = {  
            from: this.userEmail,
            to: emailDest,
            subject: subject,
            html: ` <img src = 'http://localhost:8080/uploads/txilu-pizzas-logo-no-background.png' />
                    <span>Olá, aqui é a equipa tecnica da <strong>txilu-pizzas</strong></span> </br>
                    ${message}        
            `,
            headers: {
              'Message-ID': 'unique-message-id',
              'User-Agent': 'SeuApp/1.0',
            },
            
          };
          this.transporter.sendMail(mailOptions, (error : any, info : any) => {
            if (error) {
                this.response = {OK: false, messageError: 'erro ao enviar o email'}            
            } else {
                this.response = {OK: true, message: 'Recebemos o seu email'}            
            }
          });
          return this.response
    }
}