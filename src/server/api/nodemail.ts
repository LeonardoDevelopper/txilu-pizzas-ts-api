const nodemailer = require('nodemailer');

'etde jdmp ipmt ydbo '


    // Configuração do transporte SMTP 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'txilupizzaslda@gmail.com',
          pass: ,
      },
    });

    // Opções do e-mail
    const mailOptions = {  
      from: 'leonardodevelopper924@gmail.com',
      to: email,
      subject: 'Redefinir senha',
      html: '<span>Olá, aqui é a equipa tecnica da <strong>txilu-pizzas</strong> recebemos o seu pedido de redefinição de senha acesse </span> <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a> <span>Para redefinir a sua senha</span>',
      
    };
 
    // Enviar e-mail
    transporter.sendMail(mailOptions, (error : any, info : any) => {
      if (error) {
          console.error('Erro ao enviar e-mail:', error);
          response.json({OK: false, message: error.message});
          
      } else {
          console.log('E-mail enviado:', info.response);
          response.json({OK: true, message: "Recebemos o seu email"})
      }
    });

export default class Email {

    private userEmail : string = 'txilupizzaslda@gmail.com'
    private userPassword : string = 'etde jdmp ipmt ydbo '
    private transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: this.userEmail,
            pass: this.userPassword,
        },
      });
    constructor(){}

    public sendEmail(emailDest : string, subject: string, message: string)
    {
        const mailOptions = {  
            from: this.userEmail,
            to: emailDest,
            subject: subject,
            html: ` <span>
                        Olá, aqui é a equipa tecnica da 
                        <strong>txilu-pizzas</strong> 
                        recebemos o seu pedido de redefinição de senha acesse 
                    </span> 
                    <a href ="http://localhost:3000/adm/reset-password">Redefinir senha</a>
                     <span>Para redefinir a sua senha</span>`,
            
          };
    }
}