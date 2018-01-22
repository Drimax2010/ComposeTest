import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  step = 0;
  pOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum lobortis lorem, nec hendrerit eros lobortis sit amet. Phasellus vulputate, nulla aliquam porta mollis, mi erat sollicitudin enim, ut venenatis nisi urna at turpis. Pellentesque quam mi, commodo sed pretium at, posuere a nulla. Ut maximus velit a efficitur elementum. Nullam vitae commodo dolor. Aenean eget dapibus eros, in congue orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In aliquet et lorem nec lacinia. In tristique ipsum in pellentesque porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';
  pTwo = 'Nulla a ornare leo. Pellentesque aliquam ipsum in facilisis viverra. Mauris sed diam gravida, interdum velit quis, feugiat velit. Nulla ut libero ultricies, placerat eros sed, blandit sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam pharetra, felis nec aliquam faucibus, augue odio malesuada tellus, non tincidunt mi tellus quis mi. Pellentesque vitae ante et neque pharetra egestas. Donec sodales id dui vel luctus. Quisque ultrices massa erat, et venenatis nisi volutpat eu. Nullam ut ligula maximus, aliquam mi at, mattis felis. Duis vel orci mollis, tristique ex sit amet, tempor lacus. Vivamus sed placerat massa. In massa mi, placerat sed placerat tincidunt, commodo a lectus. Curabitur justo odio, rhoncus ut semper quis, cursus ac mi. Donec vehicula aliquam leo.';
  pThree = 'Vivamus commodo, massa sit amet tempor tempus, ex justo hendrerit orci, malesuada eleifend erat magna ut eros. Maecenas in nibh dolor. Fusce tempus egestas sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum mattis lectus sagittis lobortis egestas. Sed convallis mauris vel semper lacinia. Nulla quis nulla eget mi lacinia aliquam vel iaculis dui. Nullam pulvinar rhoncus nisi vel commodo. Etiam eleifend leo purus, sed pretium sem lobortis vel. Donec feugiat augue sit amet est malesuada, id consectetur enim posuere.';
  pFour = 'Integer ac odio eget enim vehicula suscipit. Ut lacinia nisi tempus lacinia ultricies. Vestibulum id lectus in ante lobortis imperdiet. Fusce sed molestie felis, ac iaculis nunc. Cras ac dui ex. Vestibulum at imperdiet turpis, ut condimentum lectus. Sed cursus eget purus a tristique.';
  pFive = 'Praesent ut massa ultrices felis vulputate faucibus et id magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus fringilla diam a tellus blandit bibendum. Praesent eget massa non quam tincidunt venenatis. Praesent at volutpat mi. Nam id nisl est. In hac habitasse platea dictumst. Fusce nisi arcu, aliquet non lectus quis, tempus dictum nunc. Nunc vel ipsum ex. Nam purus tellus, dictum vel libero vitae, sagittis elementum tellus. Aenean diam felis, rutrum eu feugiat  eget, lobortis eget sem. Proin ipsum tellus, iaculis eget nulla eu, pretium laoreet ipsum. Ut congue et nunc quis fringilla. Donec eget dui ut mauris porttitor convallis. Sed nulla quam, consequat ut elementum nec, euismod eu arcu. Vivamus nec  erat pharetra, ultrices lorem quis, eleifend nunc.';
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
