import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, set } from '@ember/object';

export default class extends Component {
  isOpen=false;
	@tracked cg = {
    name: 'test1',
    id: 3,
    totalBudget: {
      amount: 220,
      currencyCode: 'USD'
    },
  };
  cg1= {
    name: 'test1',
    id: 1,
    totalBudget: {
      amount: 220,
      currencyCode: 'USD'
    },
  };
  cg2= {
    name: 'test1',
    id: 2,
    totalBudget: {
      amount: 200,
      currencyCode: 'USD'
    },
    increaseBy: 30,
  };
  @action
	toggleCG() {
    this.cg = this.cg.id == 1 ? this.cg2 : this.cg1;
  }
	toggleShow() {
    set(this, 'isOpen', !this.isOpen);
  }
}
