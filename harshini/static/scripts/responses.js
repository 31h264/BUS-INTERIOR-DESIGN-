function getBotResponse(input) {
    //rock paper scissors
    if (input == "Ceiling Design") {
        return "​Fall lighting  | Wooden work | Neon lighting  | Multicolor LED light | Pixel strip | More...,For more information contact our agent Gokul , He is one of our best ceiling Designer and a Great solution provider";
    } else if (input == "Flooring Design") {
        return "Wooden Flooring | DJ Flooring | Pixel strip light Flooring | More...,For more information contact our agent Riya,She is one of our best Floor Designer and a Great solution provider";
    } else if (input == "Side Panel Design") {
        return "Quarter glass Lighting Effect | Luggage Rack | More...,For more information contact our agent Pavi, She is one of our best Side Panel Designer and a Great solution provider";
    }else if (input == "Lighting") {
        return "Bouncing balls | Water drop effect | Fire effect | RGB LED Strip WS2812b | DISCO Ball Light | Neon Rope Strip Light | Head Beam Laser Light | More...,For more information contact our agent Ramya , She is one of our best Light System programmer and a Great solution provider";
    }else if (input == "Sound System") {
        return "Woofer | Subwoofer | Mid-range speaker | Tweeter | More...,For more information contact our agent Vimal , He is one of our best Sound System programmer and a Great solution provider";
    }else if (input == "Seat Fixing") {
        return "Flat(160 degrees) | Semi-flat(140 degrees) | Normal(120 degrees) | Backside seat organizer | More...,For more information contact our agent Raghul, He a Great solution provider ";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Fine") {
        return "Happy to here! Who can we help you";
    } else if (input == "goodbye") {
    return "Talk to you later!";
    } else {
        return "SORRY!! For the inconvenience. Please use the disclaimer below to suit your needs.";
    }
}