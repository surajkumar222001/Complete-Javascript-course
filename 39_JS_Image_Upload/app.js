//image upload
let uploadForm=document.querySelector('#upload-form');
uploadForm.addEventListener('submit',function (){
    let imageFile=document.querySelector('#customFile').files[0];
    let imageName=imageFile.name
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load',function (){
        if(this.result && localStorage){
            let imagesList=localStorage.getItem('images')? JSON.parse(localStorage.getItem('images')):[];
            imagesList.push(this.result);
            localStorage.setItem('images',JSON.stringify(imagesList))
        }
    });
    displayImage();
});
//display image
let displayImage=()=>{
    let imagesList=localStorage.getItem('images')? JSON.parse(localStorage.getItem('images')):[];
    if(imagesList.length !== 0){
        let cardImages='';
        for(let image of imagesList){
            cardImages += `<div class="col-md-3">
            <div class="card img-card">
                <img src="${image}" alt="" class="img-fluid">
                <div class="card-body">
                    <h3 class="card-title">Image</h3>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur dolores enim impedit maiores molestias nostrum perspiciatis provident quo saepe.</p>

                </div>
                
            </div>
            
        </div> `;

        }
        document.querySelector('#card-row').innerHTML=cardImages;
    }
};
displayImage();