let humbar = document.querySelector('.humbar');
        let navblock = document.querySelector('.menu-block');
        let menuLi = document.querySelectorAll('.menu-block li');
        let toUp = document.querySelector('.to-up');
        let flag = 0;

        window.addEventListener('scroll', goTopToggle);
        humbar.addEventListener('click', updateFlag);
        menuLi.forEach(li => {
            li.addEventListener('click', updateFlag)
        });
        toUp.addEventListener('click', goTop);

        function goTopToggle(){
            if(window.document.documentElement.scrollTop >= 500){
                toUp.className = 'to-up show text-center';
            }else if(window.document.documentElement.scrollTop < 500 ){
                toUp.className = 'to-up text-center';
            }
        }


        function goTop() {
            window.document.body.scrollTop = 0;
            window.document.documentElement.scrollTop = 0;
        }

        function updateFlag(e) {
            if (e.target.clientHeight == 0 && e.target.clientWidth == 0) { return; }
            flag += 1;
            checkshow();
        }

        function checkshow() {
            flag % 2 == 0 ? navblock.className = 'menu-block' : navblock.className = 'menu-block show';
        }