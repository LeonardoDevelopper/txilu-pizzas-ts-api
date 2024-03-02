// import { DeliverInserts } from '../deliver/inserts';
import { DeliverUpdates } from '../deliver/updates';
import { DeliverSelects } from '../deliver/selects';
import { DeliverInserts } from '../deliver/inserts';
export class Deliver {
  public inserts : DeliverInserts  = new DeliverInserts();
  public update :  DeliverUpdates = new DeliverUpdates();
  // public deletes : DeliverDeletes = new DeliverDeletes();
   public selects : DeliverSelects = new DeliverSelects();
}