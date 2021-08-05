var array = [`<strong>Lucie </strong>`,`Lenka `,`Leona `];


$(document).ready(function() {
   array.forEach (function (element) {
        $(`ul`).append(element);
    })
})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $(document).ready(function() {
      $(`title`).append("Added with javascript");
      $(`p`).append("<em>This block was added using JavaScript's jQuery library. How awesome!</em>")
  })