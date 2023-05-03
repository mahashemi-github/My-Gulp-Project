/********** To Do List - Add actions to the item creation tab ********************************************/

var currentTab = 0; 
showTab(currentTab); 

function showTab(step) {
    var x = document.getElementsByClassName("tab");
    x[step].style.display = "block";

    if (step == 0) {
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("create").style.display = "none";
    } else if (step != 0 && step != (x.length-1)){
        document.getElementById("nextBtn").style.display = "inline";
        document.getElementById("prevBtn").style.display = "inline";
        document.getElementById("create").style.display = "none";
    } else if (step == (x.length-1)){
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("prevBtn").style.display = "inline";
        document.getElementById("create").style.display = "inline";
    } 
    stepIndicator(step);
}

function stepIndicator(step) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace("active", "");
    }
    x[step].className += " active";
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            alert("Please insert an input");
            valid = false;
        }
    }

    if(valid) { document.getElementsByClassName("step")[currentTab].className += " complete"; }
    return valid; 
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");

    // Exit the function if any input field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;

    x[currentTab].style.display = "none";

    currentTab = currentTab + n;

    if(currentTab == (x.length - 1)) {
        var inputSubjectValue = document.getElementById("myInput-subject").value;
        var inputTimeValue = document.getElementById("myInput-time-interval").value;
        document.getElementById("finalization").innerHTML = "<b>Subject:</b> " + inputSubjectValue + 
                                                            " <br> <b>Time Interval:</b> " + inputTimeValue;
    }

    if (currentTab == x.length) {
        var inputSubjectValue = document.getElementById("myInput-subject").value;
        var inputTimeValue = document.getElementById("myInput-time-interval").value;
        newItemElement(inputSubjectValue, inputTimeValue);
        showTab(0);
        currentTab = 0;
        var i, y = document.getElementsByClassName("step");
        for (i = 0; i < y.length; i++) {
            y[i].className = y[i].className.replace("complete", "");
        }
    }

    if (n==-1) {
        var i, y = document.getElementsByClassName("step");
        y[currentTab].className = y[currentTab].className.replace("complete", "");
    }

    showTab(currentTab);
}

/*********** To Do List - Item Creation *************************************************************/

var itemContainer = document.getElementsByClassName("item");
var i;
for (i = 0; i < itemContainer.length; i++) {
    var span1 = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span1.className = "close";
    span1.appendChild(txt);
    itemContainer[i].appendChild(span1);
}

var close = document.getElementsByClassName("close");
var ii;
for (ii = 0; ii < close.length; ii++) {
    close[ii].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.getElementById('myITEMS');
var item = list.getElementsByTagName('div');

var iii;
for (iii = 0; iii < item.length; iii++) {
    item[iii].onclick = function() {
        this.classList.toggle('checked');
    }
}

var iiii;
for (iiii = 0; iiii < itemContainer.length; iiii++) {
    var span2 = document.createElement("SPAN");
    var ielement = document.createElement("I");
    ielement.className = "fa fa-bars";
    span2.className = "menu-icon";
    span2.appendChild(ielement);
    itemContainer[iiii].appendChild(span2);
} 

var i, ii, iii, iiii;
function newItemElement(s, t) {  

  var section = document.getElementById("myITEMS");
  var subsection = document.createElement("SECTION");
  subsection.className = "item-menu-container";

  section.appendChild(subsection);      

  // Subject and time container ------------------------
    var div = document.createElement("DIV");
    div.className = "item";

    var spanSub = document.createElement("SPAN");
    var spanTim = document.createElement("SPAN");

    spanSub.className = "sub";
    spanTim.className = "tim";

    var subtex = document.createTextNode(s);
    var timtex = document.createTextNode(t);

    spanSub.appendChild(subtex);
    spanTim.appendChild(timtex);

    div.appendChild(spanSub);
    div.appendChild(spanTim);

    document.getElementById("myInput-subject").value = "";
    document.getElementById("myInput-time-interval").value = "";
  
    var spanclose = document.createElement("SPAN");
    var closetxt = document.createTextNode("\u00D7");

    spanclose.className = "close";

    spanclose.appendChild(closetxt);
    div.appendChild(spanclose);

    subsection.appendChild(div);  

  // menu icon container ------------------------
    var divm = document.createElement("DIV");
    divm.className = "menu-icon-con";

    var span2 = document.createElement("SPAN");
    var iicon = document.createElement("I");
    iicon.className = "fa fa-bars";
    span2.className = "menu-icon";

    span2.appendChild(iicon);
    divm.appendChild(span2);
    subsection.appendChild(divm);

  // menu options container ------------------------
    var divb = document.createElement("DIV");
    divb.className = "menu";
      
    var spaneditsub = document.createElement("SPAN");
    var spanedittim = document.createElement("SPAN");
    var spandone = document.createElement("SPAN");
    var spandel = document.createElement("SPAN");

    var editsubtex = document.createTextNode("Edit Subject: ");
    var edittimtex = document.createTextNode("Edit Time: ");
    var donetex = document.createTextNode("Item Done");
    var deltex = document.createTextNode("Delete Item");

    spaneditsub.className = "allmenus1";
    spanedittim.className = "allmenus2";
    spandone.className = "allmenus3";
    spandel.className = "allmenus4";

    spaneditsub.appendChild(editsubtex);
    spanedittim.appendChild(edittimtex);
    spandone.appendChild(donetex);
    spandel.appendChild(deltex);

    divb.appendChild(spaneditsub);
    divb.appendChild(spanedittim);
    divb.appendChild(spandone);
    divb.appendChild(spandel);
  
    subsection.appendChild(divb);

  // ------- close and checked actions ---------------------
    var close = document.getElementsByClassName("close");
      
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }

    for (iii = 0; iii < item.length; iii++) {
        item[iii].onclick = function() {
            this.classList.toggle('checked');
        }
    }

  // ------- menu button action ---------------------
    var menubtn = document.getElementsByClassName("menu-icon-con");
    
    for (i = 0; i < menubtn.length; i++) {
        menubtn[i].onclick = function() {
            this.parentElement.childNodes[2].classList.toggle('open');
            this.classList.toggle('activee');
        }
    }

  // -------- add options (input, done and cancel) to the Subject and Time edit options of the menu --------------------

    var editItem1 = document.getElementsByClassName("allmenus1");
    var input1 = document.createElement("INPUT");
    var btnDoneEditSub1 = document.createElement("BUTTON");
    var btnCancel1 = document.createElement("BUTTON");

    input1.setAttribute("placeHolder", "Edit subject ...");

    input1.className = "edit-sub-input";
    btnDoneEditSub1.className = "edit-sub-done";
    btnCancel1.className = "edit-sub-cancel";

    var btnDoneTex1 = document.createTextNode("done");
    var btnCancelTex1 =document.createTextNode("cancel");

    btnDoneEditSub1.appendChild(btnDoneTex1);
    btnCancel1.appendChild(btnCancelTex1);

    for (i = 0; i < editItem1.length; i++) {
        editItem1[i].appendChild(input1);
        editItem1[i].appendChild(btnDoneEditSub1);
        editItem1[i].appendChild(btnCancel1);
    }

    var editItem2 = document.getElementsByClassName("allmenus2");
    var input2 = document.createElement("INPUT");
    var btnDoneEditSub2 = document.createElement("BUTTON");
    var btnCancel2 = document.createElement("BUTTON");

    input2.setAttribute("placeHolder", "Edit time ...");

    input2.className = "edit-tim-input";
    btnDoneEditSub2.className = "edit-tim-done";
    btnCancel2.className = "edit-tim-cancel";

    var btnDoneTex2 = document.createTextNode("done");
    var btnCancelTex2 =document.createTextNode("cancel");

    btnDoneEditSub2.appendChild(btnDoneTex2);
    btnCancel2.appendChild(btnCancelTex2);

    for (i = 0; i < editItem2.length; i++) {
        editItem2[i].appendChild(input2);
        editItem2[i].appendChild(btnDoneEditSub2);
        editItem2[i].appendChild(btnCancel2);
    }
  
  // ------- Done and cancel actions in edit options---------------------  
  var btndone1 = document.getElementsByClassName("edit-sub-done");
  var btncancel1 = document.getElementsByClassName("edit-sub-cancel");

  for (i = 0; i < btndone1.length; i++) {
      btndone1[i].onclick = function() {         
          var inputtext = this.previousSibling.value ; 
          this.parentElement.parentElement.parentElement.firstChild.firstChild.innerHTML = inputtext;
          this.previousSibling.value = ""; 
      }  
  }

  for (i = 0; i < btncancel1.length; i++) {
      btncancel1[i].onclick = function() {
          this.previousSibling.previousSibling.value = ""; 
      }  
  }

  var btndone2 = document.getElementsByClassName("edit-tim-done");
  var btncancel2 = document.getElementsByClassName("edit-tim-cancel");

  for (i = 0; i < btndone2.length; i++) {
      btndone2[i].onclick = function() {         
          var inputtext = this.previousSibling.value ; 
          this.parentElement.parentElement.parentElement.firstChild.childNodes[1].innerHTML = inputtext;
          this.previousSibling.value = ""; 
      }  
  }

  for (i = 0; i < btncancel2.length; i++) {
      btncancel2[i].onclick = function() {
          this.previousSibling.previousSibling.value = ""; 
      }  
  }

// add action to Item Done Button --------------------
var itemDone =  document.getElementsByClassName("allmenus3");

  for (iii = 0; iii < itemDone.length; iii++) {
      itemDone[iii].onclick = function() {
          this.parentElement.parentElement.firstChild.classList.toggle('checked');
      }
  }

  // add action to Delete Item Button --------------------
  var itemDone =  document.getElementsByClassName("allmenus4");

  for (iii = 0; iii < itemDone.length; iii++) {
      itemDone[iii].onclick = function() {
          this.parentElement.parentElement.style.display = "none";
      }
  }  

}

newItemElement("Web development project", "8:30-12:00");
newItemElement("Hit the gym", "2:30-4:30");
