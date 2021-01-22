let inputNoRepeat = document.querySelector(".no-repeat input");
let tagsContainerNoRepeat = document.querySelector(".no-repeat");
let inputRepeat = document.querySelector(".repeat input");
let tagsContainerRepeat = document.querySelector(".repeat");


// -----------------------
//    No Rppeat Tag
// -----------------------
let tagWithNoRepeat = {
  labels: ["Makati", "Mandaluyong"],
  display: function () {
    for (let value in this.labels) {
      this.createElement(this.labels[value]);
    }
  },
  addTag: function (e) {
    let value = e.target.value;
    let index = this.labels.indexOf(value);
    let tagLabel = ".tags-label";
    let getTagLabels = document.querySelectorAll(tagLabel);
    Array.from(getTagLabels).forEach((array, i) => {
      getTagLabels[i].classList.remove("already-have");
    });
    if (value == "") return;

    this.checkIfExist(e, tagLabel, index, value);
  },
  removeTag: function (e) {
    if (e.target.className != "remove") return;

    let tagItem = e.target.closest(".tags-label");
    let text = tagItem.textContent;
    let index = this.labels.indexOf(text);

    if (index > -1) {
      this.labels.splice(index, 1);
    }
    console.log(`No Repeat: ${this.labels}`);

    tagItem.remove();
  },
  checkIfExist: function (e, el, index, value) {
    let element = document.querySelectorAll(el);
    if (index > -1) {
      element[index].classList.add("already-have");
    } else {
      this.toArray(value);
      this.createElement(value);
      this.removeContent(e);
      console.log(`No Repeat: ${this.labels}`);
    }
  },
  toArray: function (value) {
    this.labels.push(value);
  },
  createElement: function (value) {
    //Create element
    let tagsContainer = document.querySelector(".no-repeat");
    let tagLabelWrapper = document.createElement("SPAN");
    tagLabelWrapper.classList.add("tags-label");
    let tagRemoveBtn = document.createElement("BUTTON");
    tagRemoveBtn.classList.add("remove");

    //Append to tag label wrapper
    tagLabelWrapper.innerHTML = value;
    tagLabelWrapper.appendChild(tagRemoveBtn);

    // Insert to Tags container
    tagsContainer.insertBefore(tagLabelWrapper, tagsContainer.lastElementChild);
  },
  removeContent: function (e) {
    e.target.value = "";
  },
  backspace: function (e) {
    let value = e.target.value;
    if (value == "") {
      let tagLabels = document.querySelectorAll(".no-repeat .tags-label");
      let length = tagLabels.length;

      // Remove last tag label
      if (length != 0) {
        tagLabels[length - 1].remove();
        this.labels.pop();
        console.log(`No Repeat: ${this.labels}`);
      }
    }
  },
};

// -----------------------
//    Repeating Tag
// -----------------------
let tagRepeat = {
  labels: ["Patrick", "Jeff", "Mary"],
  display: function () {
    for (let value in this.labels) {
      this.createElement(this.labels[value]);
    }
  },
  addTag: function (e) {
    let value = e.target.value;
    let index = this.labels.indexOf(value);

    if (value == "") return;
    this.toArray(value);
    this.createElement(value);
    this.removeContent(e);
    console.log(`Repeat: ${this.labels}`);
  },
  removeTag: function (e) {
    if (e.target.className != "remove") return;

    let tagItem = e.target.closest(".tags-label");
    let text = tagItem.textContent;
    let index = this.labels.indexOf(text);

    if (index > -1) {
      this.labels.splice(index, 1);
    }
    console.log(`Repeat: ${this.labels}`);
    tagItem.remove();
  },
  toArray: function (value) {
    this.labels.push(value);
  },
  createElement: function (value) {
    //Create element
    let tagsContainer = document.querySelector(".repeat");
    let tagLabelWrapper = document.createElement("SPAN");
    tagLabelWrapper.classList.add("tags-label");
    let tagRemoveBtn = document.createElement("BUTTON");
    tagRemoveBtn.classList.add("remove");

    //Append to tag label wrapper
    tagLabelWrapper.innerHTML = value;
    tagLabelWrapper.appendChild(tagRemoveBtn);

    // Insert to Tag container
    tagsContainer.insertBefore(tagLabelWrapper, tagsContainer.lastElementChild);
  },
  removeContent: function (e) {
    e.target.value = "";
  },
  backspace: function (e) {
    let value = e.target.value;
    if (value == "") {
      let tagLabels = document.querySelectorAll(".repeat .tags-label");
      let length = tagLabels.length;
      console.log(length);

      // Remove last tag label
      if (length != 0) {
        tagLabels[length - 1].remove();
        this.labels.pop();
        console.log(`Repeat: ${this.labels}`);
      }
    }
  },
};

let haveData = {
  label: ["Makati", "Mandaluyong"],
  display: function () {
    let text = "";
    for (let x in this.label) {
      text = this.label[x] + ", ";
    }
  },
};

let viewNoRepeatTags = document.getElementById("noRepeatTags");
let viewRepeatTags = document.getElementById("repeatTags");

// Display tags if there was a data
tagWithNoRepeat.display();
tagRepeat.display();
viewNoRepeatTags.innerHTML = tagWithNoRepeat.labels;
viewRepeatTags.innerHTML = tagRepeat.labels;

// For no repeat input
inputNoRepeat.addEventListener("keydown", (e) => {
  if (e.keyCode == "13") {
    tagWithNoRepeat.addTag(e);
    viewNoRepeatTags.innerHTML = tagWithNoRepeat.labels;
  }
});
inputNoRepeat.addEventListener("keydown", (e) => {
  if (e.keyCode == "8") {
    tagWithNoRepeat.backspace(e);
    viewNoRepeatTags.innerHTML = tagWithNoRepeat.labels;
  }
});
tagsContainerNoRepeat.addEventListener("click", (e) => {
  tagWithNoRepeat.removeTag(e);
  viewNoRepeatTags.innerHTML = tagWithNoRepeat.labels;
});
// END - For no repeat input


// For repeat input
inputRepeat.addEventListener("keydown", (e) => {
  if (e.keyCode == "13") {
    tagRepeat.addTag(e);
    repeatTags.innerHTML = tagRepeat.labels;
  }
});
inputRepeat.addEventListener("keydown", (e) => {
  if (e.keyCode == "8") {
    tagRepeat.backspace(e);
    repeatTags.innerHTML = tagRepeat.labels;
  }
});
tagsContainerRepeat.addEventListener("click", (e) => {
  tagRepeat.removeTag(e);
  repeatTags.innerHTML = tagRepeat.labels;
});
// END - For repeat input
