function change() {
   let ax = document.getElementById("ax").value;
   let bx = document.getElementById("bx").value;
   let cx = document.getElementById("cx").value;
   let dx = document.getElementById("dx").value;
   let a = document.getElementsByName("full1");
   let b = document.getElementsByName("full2");
   let c, d;

   let ax1 = ax.substr(0, 2);
   let ax2 = ax.substr(2, 4);
   let bx1 = bx.substr(0, 2);
   let bx2 = bx.substr(2, 4);
   let cx1 = cx.substr(0, 2);
   let cx2 = cx.substr(2, 4);
   let dx1 = dx.substr(0, 2);
   let dx2 = dx.substr(2, 4);

   let e = document.getElementsByName("half1");
   let f = document.getElementsByName("half2");
   let g;
   let h;

   if (document.getElementById("empty1").checked == true || document.getElementById("empty2").checked == true) {} else {
      a.forEach(radio => {
         if (radio.checked) {
            if (radio.value === "ax1")
               c = ax;

            if (radio.value === "bx1")
               c = bx;

            if (radio.value === "cx1")
               c = cx;

            if (radio.value === "dx1")
               c = dx;
         }
      });
      b.forEach(radio => {
         if (radio.checked) {
            if (radio.value === "ax2")
               d = ax;

            if (radio.value === "bx2")
               d = bx;

            if (radio.value === "cx2")
               d = cx;

            if (radio.value === "dx2")
               d = dx;
         }
      });
      a.forEach(radio => {
         if (radio.checked) {
            if (radio.value === "ax1")
               document.getElementById("ax").value = d;

            if (radio.value === "bx1")
               document.getElementById("bx").value = d;

            if (radio.value === "cx1")
               document.getElementById("cx").value = d;

            if (radio.value === "dx1")
               dx = document.getElementById("dx").value = d;
         }
      });
      b.forEach(radio => {
         if (radio.checked) {
            if (radio.value === "ax2")
               document.getElementById("ax").value = c;

            if (radio.value === "bx2")
               document.getElementById("bx").value = c;

            if (radio.value === "cx2")
               document.getElementById("cx").value = c;

            if (radio.value === "dx2")
               document.getElementById("dx").value = c;
         }
      });
   }
   if (document.getElementById("empty3").checked == true || document.getElementById("empty4").checked == true) {} else {
      e.forEach(radio => {
         if (radio.checked) {
            if (radio.id === "ah1")

               g = ax1;

            if (radio.id === "bh1")
               g = bx1;

            if (radio.id === "ch1")
               g = cx1;

            if (radio.id === "dh1")
               g = dx1;

            if (radio.id === "al1")
               g = ax2;

            if (radio.id === "bl1")
               g = bx2;

            if (radio.id === "cl1")
               g = cx2;

            if (radio.id === "dl1")
               g = dx2;
         }
      });

      f.forEach(radio => {
         if (radio.checked) {

            if (radio.id === "ah2")

               h = ax1;

            if (radio.id === "bh2")
               h = bx1;

            if (radio.id === "ch2")
               h = cx1;

            if (radio.id === "dh2")
               h = dx1;

            if (radio.id === "al2")
               h = ax2;

            if (radio.id === "bl2")
               h = bx2;

            if (radio.id === "cl2")
               h = cx2;

            if (radio.id === "dl2")
               h = dx2;

         }
      });

      e.forEach(radio => {
         if (radio.checked) {

            if (radio.id == "ah1")
               document.getElementById("ax").value = h + ax2;

            if (radio.id == "bh1")
               document.getElementById("bx").value = h + bx2;

            if (radio.id == "ch1")
               document.getElementById("cx").value = h + cx2;

            if (radio.id == "dh1")
               document.getElementById("ax").value = h + dx2;


            if (radio.id == "al1")
               document.getElementById("ax").value = ax1 + h;

            if (radio.id == "bl1")
               document.getElementById("bx").value = bx1 + h;

            if (radio.id == "cl1")
               document.getElementById("cx").value = cx1 + h;

            if (radio.id == "dl1")
               document.getElementById("dx").value = dx1 + h;
         }
      });

      f.forEach(radio => {
         if (radio.checked) {

            if (radio.id == "ah2")
               document.getElementById("ax").value = g + ax2;

            if (radio.id == "bh2")
               document.getElementById("bx").value = g + bx2;

            if (radio.id == "ch2")
               document.getElementById("cx").value = g + cx2;

            if (radio.id == "dh2")
               document.getElementById("dx").value = g + dx2;

            if (radio.id == "al2")
               document.getElementById("ax").value = ax1 + g;

            if (radio.id == "bl2")
               document.getElementById("bx").value = bx1 + g;

            if (radio.id == "cl2")
               document.getElementById("cx").value = cx1 + g;

            if (radio.id == "dl2")
               document.getElementById("dx").value = dx1 + g;
         }
      });


   }
};

function copy() {
   let ax = document.getElementById("ax").value;
   let bx = document.getElementById("bx").value;
   let cx = document.getElementById("cx").value;
   let dx = document.getElementById("dx").value;

   let ax1 = ax.substr(0, 2);
   let ax2 = ax.substr(2, 4);
   let bx1 = bx.substr(0, 2);
   let bx2 = bx.substr(2, 4);
   let cx1 = cx.substr(0, 2);
   let cx2 = cx.substr(2, 4);
   let dx1 = dx.substr(0, 2);
   let dx2 = dx.substr(2, 4);

   let a = document.getElementsByName("full1");
   let b = document.getElementsByName("full2");
   let c;
   let e = document.getElementsByName("half1");
   let f = document.getElementsByName("half2");
   let g;
   g = " ";

   if (document.getElementById("empty1").checked == true || document.getElementById("empty2").checked == true) {} else {
      a.forEach(radio => {
         if (radio.checked) {
            if (radio.value === "ax1")
               c = ax;

            if (radio.value === "bx1")
               c = bx;

            if (radio.value === "cx1")
               c = cx;

            if (radio.value === "dx1")
               c = dx;
         }
      });
      b.forEach(radio => {
         if (radio.checked) {
            if (radio.value === "ax2")
               document.getElementById("ax").value = c;

            if (radio.value === "bx2")
               document.getElementById("bx").value = c;

            if (radio.value === "cx2")
               document.getElementById("cx").value = c;

            if (radio.value === "dx2")
               document.getElementById("dx").value = c;

         }
      });
   }
   if (document.getElementById("empty3").checked == true || document.getElementById("empty4").checked == true) {

   } else {
      e.forEach(radio => {
         if (radio.checked) {
            if (radio.id === "ah1")

               g = ax1;

            if (radio.id === "bh1")
               g = bx1;

            if (radio.id === "ch1")
               g = cx1;

            if (radio.id === "dh1")
               g = dx1;

            if (radio.id === "al1")
               g = ax2;

            if (radio.id === "bl1")
               g = bx2;

            if (radio.id === "cl1")
               g = cx2;

            if (radio.id === "dl1")
               g = dx2;

         }
      });

      f.forEach(radio => {
         if (radio.checked) {
            if (radio.id === "ah2")

               document.getElementById("ax").value = g + ax2;


            if (radio.id === "bh2")
               document.getElementById("bx").value = g + bx2;


            if (radio.id === "ch2")
               document.getElementById("cx").value = g + cx2;

            if (radio.id === "dh2")
               document.getElementById("dx").value = g + dx2;

            if (radio.id === "al2")
               document.getElementById("ax").value = ax1 + g;

            if (radio.id === "bl2")
               document.getElementById("bx").value = bx1 + g;

            if (radio.id === "cl2")
               document.getElementById("cx").value = cx1 + g;

            if (radio.id === "dl2")
               document.getElementById("dx").value = dx1 + g;
         }
      });
   }
};

function confirm() {
   let ah = document.getElementById("ah").value;
   let al = document.getElementById("al").value;
   let bh = document.getElementById("bh").value;
   let bl = document.getElementById("bl").value;
   let ch = document.getElementById("ch").value;
   let cl = document.getElementById("cl").value;
   let dh = document.getElementById("dh").value;
   let dl = document.getElementById("dl").value;

   const letters = /^[a-f,0-9]+$/i;
   //AX AL AH
   if (ah.match(letters) && al.match(letters)) {
      document.getElementById("ax").value = ah + al;
   } else if (ah.match(letters)) {
      document.getElementById("ax").value = ah + "00";
   } else if (al.match(letters)) {
      document.getElementById("ax").value = "00" + al;
   }

   //BX BL BH
   if (bh.match(letters) && bl.match(letters)) {
      document.getElementById("bx").value = bh + bl;
   } else if (bh.match(letters)) {
      document.getElementById("bx").value = bh + "00";
   } else if (bl.match(letters)) {
      document.getElementById("bx").value = "00" + bl;
   }


   //CX CL CH
   if (ch.match(letters) && cl.match(letters)) {
      document.getElementById("cx").value = ch + cl;
   } else if (ch.match(letters)) {
      document.getElementById("cx").value = ch + "00";
   } else if (cl.match(letters)) {
      document.getElementById("cx").value = "00" + cl;
   }


   //DX DL DH
   if (dh.match(letters) && dl.match(letters)) {
      document.getElementById("dx").value = dh + dl;
   } else if (dh.match(letters)) {
      document.getElementById("dx").value = dh + "00";
   } else if (dl.match(letters)) {
      document.getElementById("dx").value = "00" + dl;
   }

};

function reset() {
   document.getElementById("ax").value = ("0000");
   document.getElementById("bx").value = ("0000");
   document.getElementById("cx").value = ("0000");
   document.getElementById("dx").value = ("0000");
   document.getElementById("ah").value = ("");
   document.getElementById("al").value = ("");
   document.getElementById("bh").value = ("");
   document.getElementById("bl").value = ("");
   document.getElementById("ch").value = ("");
   document.getElementById("cl").value = ("");
   document.getElementById("dh").value = ("");
   document.getElementById("dl").value = ("");
};

function random() {
   let result = "";
   let characters = "ABCDEF1234567890";
   let length = characters.length;

   for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * length));
   }
   document.getElementById("ax").value = result;
   random1();
   random2();
   random3();
}

function random1() {
   let result = "";
   let characters = "ABCDEF1234567890";
   let length = characters.length;

   for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * length));
   }
   document.getElementById("bx").value = result;

};

function random2() {
   let result = "";
   let characters = "ABCDEF1234567890";
   let length = characters.length;

   for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * length));
   }
   document.getElementById("cx").value = result;
};

function random3() {
   let result = "";
   let characters = "ABCDEF1234567890";
   let length = characters.length;

   for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * length));
   }
   document.getElementById("dx").value = result;
}