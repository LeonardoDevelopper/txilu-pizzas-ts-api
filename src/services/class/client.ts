import { ClientInserts } from '../client/inserts';

export class Client {
  private inserts : ClientInserts = new ClientInserts();
  public update :  ClientUpdates = new ClientUpdates();
  public deletes : ClientDeletes = new ClientDeletes();
  public selects : ClientSelects = new ClientSelects();
}