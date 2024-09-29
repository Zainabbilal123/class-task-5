
        function calculateAge() {
            const dobInput = document.getElementById("dob").value;
            const dob = new Date(dobInput);
            const now = new Date();

            const diffInMs = now - dob;

            
            const seconds = Math.floor(diffInMs / 1000);
            const minutes = Math.floor(seconds / 60);
            
            
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const years = Math.floor(days / 365);
            const remainingDays = days % 365;

           
            const months = Math.floor(remainingDays / 30);
            const finalDays = remainingDays % 30;

            document.getElementById("years").innerText = years;
            document.getElementById("months").innerText = months;
            document.getElementById("days").innerText = finalDays;
            
        }

