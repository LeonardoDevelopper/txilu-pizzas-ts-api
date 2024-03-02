import { AdminInserts } from '../admin/inserts';
import { AdminSelects } from '../admin/selects';
import { AdminUpdates } from '../admin/updates';
import { AdminDeletes } from '../admin/deletes';


export class Admin {
  public inserts : AdminInserts = new AdminInserts();
  public update : AdminUpdates = new AdminUpdates();
  public deletes : AdminDeletes = new AdminDeletes();
  public selects : AdminSelects = new AdminSelects();


  
}