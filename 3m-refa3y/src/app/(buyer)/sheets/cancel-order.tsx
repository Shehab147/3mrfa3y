import { SelectSheet } from '@/components/select-sheet';
export default function CancelOrder(){return <SelectSheet title="Cancel this order?" subtitle="You can cancel before the farm begins preparing it." options={['Changed my mind','Ordered by mistake','Delivery time no longer works','Another reason']} button="Cancel order" destructive/>}
