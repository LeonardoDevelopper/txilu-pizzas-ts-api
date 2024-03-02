import { ClientDeletes } from '../client/deletes';
import { ClientInserts } from '../client/inserts';
import { ClientSelects } from '../client/selects'
import { ClientUpdates } from '../client/updates'
export class Client {
  public insert : ClientInserts = new ClientInserts();
   public update :  ClientUpdates = new ClientUpdates();
   public deletes : ClientDeletes = new ClientDeletes();
   public selects : ClientSelects = new ClientSelects();
}