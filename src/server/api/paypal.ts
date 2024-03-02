import paypal from 'paypal-rest-sdk'

export type Item = {name : string, sku : string,  price : string, currency : string, quantity : number}
type Approval_url = {href: string,rel: 'approval_url', method: 'REDIRECT'}

export interface PaymentType {
    id: string,
    links: [
      {
        href: URL,
        rel: string,
        method: string
      },
      {
        href: URL,
        rel: string,
        method: "GET"
      }
    ]
  }

export class Payment {
    private PayPal = paypal
    private CLIENT_ID : string =  "ARA4-sQQSovnko_FqOlaxh3cicKS2_mprpYX_7pghJPGuSUduLE36TnFdrFOHoeKneAuiYu64c0ZUujB" ;
    private CLIENT_SECRET : string  = "EFWKnhil_lxzl1pXSKlORdxQH3HiS5ufynvkGnefqa_WvF83-IN1nW997OPznlu44mP6H0y_TOwcomkc";
    constructor(){
        this.settings()
    }

    private settings () {
        this.PayPal.configure({
            mode : 'sandbox',
            client_id : this.CLIENT_ID,
            client_secret : this.CLIENT_SECRET
        })
    }

    private create_object_payment(items : Array<Item>, total : string, ORDERID : string) 
    {
        const create_payment_json = {
            "intent": "sale",
                "payer": {
                  payment_method : "paypal"
                },
                "redirect_urls": {
                  "return_url" : `http://192.168.165.241:8080/success/${ORDERID}`,
                  "cancel_url": "http://192.168.165.241:8080/cancel"
                },
            "transactions": [{
                "item_list": {
                    "items": items
                },
                "amount": {
                    "currency": "USD",
                    "total": total
                    },
                "description" : items.map(item => 'Name: ' + item.name + 'Quantity : X' + item.quantity ).join(',')
            }]
        }
          
          return create_payment_json;
    }

    public pay(items: Item[], total: string, ORDERID : string) : Promise<paypal.Link>  {
        return new Promise( (resolve, reject) => {
            this.PayPal.payment.create(this.create_object_payment(items, total, ORDERID), (error: any, payment : paypal.PaymentResponse ) => {
                if (error)
                    reject(error);
                else
                {
                    if(typeof payment.links != 'undefined')
                    {
                        for (let i = 0; i < payment.links.length; i++) {
                            if(payment.links[i].rel === 'approval_url' )
                            {
                                 resolve(payment.links[i])
                            }
                        }
    
                    }
                }
            });
        })
        
    }

}