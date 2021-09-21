import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { localCopy, trackedReset } from 'tracked-toolbox';

export default class extends Component {
  @localCopy('args.cg') cg;
  
  @trackedReset({
    memo: '{cg, showTag}',
    update() {
      return this.cg.totalBudget || this.showTag ? true : false;
    }
  })
  isShowTag1;
  
   @trackedReset({
    memo: (component) => {
     return `${component.cg}-${component.showTag}`;
   	},
    update() {
      return this.cg.totalBudget || this.showTag ? true : false;
    }
  })
  isShowTag3;
  
  @computed('cg','showTag')
  get isShowTag2() {
    return this.cg.totalBudget || this.showTag ? true : false;
  }
  
  @trackedReset({
    memo: 'args.totalBudget',
    update() {
      return this.args.totalBudget > this.cg.totalBudget;
    }
  })
  showTag;
  
	@trackedReset({
    memo:'cg',
		update() {
      if(this.cg.increaseBy) {
        return this.cg.totalBudget.amount + this.cg.increaseBy;
      }
      return this.cg.totalBudget.amount;
    }
  })
  totalBudget;
  
  @action
  showHide() {
    debugger
    this.showTag = false;
    this.args.toggleShow();
  }
}