// var person={
//     name:"Ali",
//     age:21,
//     address:"Banha",
//     salary:5000,
//     work:function() {
//         console.log("working")
//     },
//     wife:{
//         name:"liaa",
//         age:20,
//         son:{
//             name:"Ali",
//             age:5
//         }
//     }

// }
// var console={
//     log:function(data){
//     console.log(data);}

// }

// var arr=[1,2,3];
// arr[10]=10;
// console.log(arr.length);
// // console.log(person["name"])
// // console.log(person.wife.son.name)

// var proName = document.getElementById("proName");
// var proPrice = document.getElementById("proPrice");
// var proCategory = document.getElementById("proCategory");
// var proDesc = document.getElementById("proDesc");
// var btn = document.getElementById("btn");
// var proContainer = [];

// btn.onclick = function() {
//     var pro = {
//         name: proName.value,
//         price: proPrice.value,
//         cate: proCategory.value,
//         desc: proDesc.value
//     };
//     proContainer.push(pro);
//     console.log(proContainer);
// };




// function displayPro() {
//     var AllPro = ``;
//     for (let i = 0; i < proContainer.length; i++) {
//         AllPro += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${proContainer[i].name}</td>
//             <td>${proContainer[i].price}</td>
//             <td>${proContainer[i].category}</td>
//             <td>${proContainer[i].desc}</td>
//             <td>
//                 <button class="btn delete">Delete</button>
//                 <button class="btn update">Update</button>
//             </td>
//         </tr>
//         `;
//     }
//     document.getElementById("tbody").innerHTML = AllPro;
// }


var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var btn = document.getElementById("btn");
var proSearch = document.getElementById("proSearch");
var proContainer = [];
var editIndex = null;

if (JSON.parse(localStorage.getItem("AllProducts")) != null) {
  proContainer = JSON.parse(localStorage.getItem("AllProducts"));
  displayPro();
}

btn.onclick = function () {
  var pro = {
    name: proName.value,
    price: proPrice.value,
    category: proCategory.value,
    desc: proDesc.value
  };

  if (editIndex === null) {
    proContainer.push(pro);
  } else {
    proContainer[editIndex] = pro;
    editIndex = null;
    btn.textContent = "Add Product";
  }

  localStorage.setItem("AllProducts", JSON.stringify(proContainer));
  clearForm();
  displayPro();
};

function displayPro() {
  var AllPro = ``;
  for (let i = 0; i < proContainer.length; i++) {
    AllPro += `
    <tr>
        <td>${i + 1}</td>
        <td>${proContainer[i].name}</td>
        <td>${proContainer[i].price}</td>
        <td>${proContainer[i].category}</td>
        <td>${proContainer[i].desc}</td>
        <td>
            <button class="btn delete" onclick="deletePro(${i})">Delete</button>
            <button class="btn update" onclick="updatePro(${i})">Update</button>
        </td>
    </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = AllPro;
}

function deletePro(index) {
  proContainer.splice(index, 1);
  localStorage.setItem("AllProducts", JSON.stringify(proContainer));
  displayPro();
}

function updatePro(index) {
  var pro = proContainer[index];
  proName.value = pro.name;
  proPrice.value = pro.price;
  proCategory.value = pro.category;
  proDesc.value = pro.desc;
  editIndex = index;
  btn.textContent = "Update Product";
}


proSearch.onkeyup = function () {
  search(proSearch.value);
};

function search(data) {
  var AllPro = ``;
  for (let i = 0; i < proContainer.length; i++) {
    if (proContainer[i].name.toLowerCase().includes(data.toLowerCase())) {
      AllPro += `
      <tr>
          <td>${i + 1}</td>
          <td>${proContainer[i].name}</td>
          <td>${proContainer[i].price}</td>
          <td>${proContainer[i].category}</td>
          <td>${proContainer[i].desc}</td>
          <td>
              <button class="btn delete" onclick="deletePro(${i})">Delete</button>
              <button class="btn update" onclick="updatePro(${i})">Update</button>
          </td>
      </tr>
      `;
    }
  }
  document.getElementById("tbody").innerHTML = AllPro;
}

function clearForm() {
    proName.value = "";
    proPrice.value = "";
    proCategory.value = "";
    proDesc.value = "";
  }
  