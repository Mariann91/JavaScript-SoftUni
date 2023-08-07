function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish"){
        let movieName = command;

        index++;
      
        let currentMovieSeats = Number(input[index]);
        let takenSeats = 0;

        index++;
      
        let secondCommand = input[index];

        while (secondCommand !== "End") {
          
            let ticketType = secondCommand;      

            switch (ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }

            takenSeats++;

            if (takenSeats >= currentMovieSeats) {
                break;
            }

            index++;
          
            secondCommand = input[index];
            
        }

        let hallFullnessPercent = takenSeats / currentMovieSeats * 100;
        console.log(`${movieName} - ${hallFullnessPercent.toFixed(2)}% full.`)

        index++;
        command = input[index];
    }

    let totalTickets = studentTickets + standardTickets + kidTickets;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
