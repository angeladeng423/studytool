import React, {useState, useEffect} from 'react';
import beach from '../audioclips/beach.wav';
import cars from '../audioclips/cars.wav';
import heavywind from '../audioclips/heavywind.wav';
import heelsstep from '../audioclips/heelsstep.mp3';
import normalrain from '../audioclips/normalrain.wav';
import rainonglass from '../audioclips/rainonglass.wav';
import rainonumbrella from '../audioclips/rainonumbrella.mp3';
import thunder from '../audioclips/thunder.wav';

// want to set up a board where you can select sounds to play on loop
// sounds turn off when clicked again, control with counter?
// loop controlled by useEffect
function AudioPlayer(){
    let playSound = 1;
    let playSound2 = 1;
    let playSound3 = 1;
    let playSound4 = 1;
    let playSound5 = 1;
    let playSound6 = 1;
    let playSound7 = 1;
    let playSound8 = 1;

    let soundBeach = new Audio(beach)
    soundBeach.volume = 1;
    soundBeach.loop = true;

    let soundcars = new Audio(cars)
    soundcars.volume = 1;
    soundcars.loop = true;

    let soundheavywind = new Audio(heavywind)
    soundheavywind.volume = 0.8;
    soundheavywind.loop = true;
    
    let soundheelsstep = new Audio(heelsstep)
    soundheelsstep.volume = 0.9;
    soundheelsstep.loop = true;

    let soundnormalrain = new Audio(normalrain)
    soundnormalrain.volume = 0.6;
    soundnormalrain.loop = true;    

    let soundrainonglass = new Audio(rainonglass)
    soundrainonglass.volume = 0.6;
    soundrainonglass.loop = true;

    let soundrainonumbrella = new Audio(rainonumbrella)
    soundrainonumbrella.volume = 1;
    soundrainonumbrella.loop = true;

    let soundthunder = new Audio(thunder)
    soundthunder.volume = 0.7;
    soundthunder.loop = true;

    return(
        <div>
            <button onClick = {()=>{
                if (playSound === 1){
                    playSound = 0;
                    soundBeach.play()
                } else {
                    playSound = 1;
                    soundBeach.pause();
                }
            }}>beach</button>
            <button onClick = {()=>{
                if (playSound2 === 1){
                    playSound2 = 0;
                    soundcars.play()
                } else {
                    playSound2 = 1;
                    soundcars.pause();
                }
            }}>cars</button>
            <button onClick = {()=>{
                if (playSound3 === 1){
                    playSound3 = 0;
                    soundheavywind.play()
                } else {
                    playSound3 = 1;
                    soundheavywind.pause();
                }
            }}>heavywind</button>
            <button onClick = {()=>{
                if (playSound4 === 1){
                    playSound4 = 0;
                    soundheelsstep.play()
                } else {
                    playSound4 = 1;
                    soundheelsstep.pause();
                }
            }}>heelsstep</button>
            <button onClick = {()=>{
                if (playSound5 === 1){
                    playSound5 = 0;
                    soundnormalrain.play()
                } else {
                    playSound5 = 1;
                    soundnormalrain.pause();
                }
            }}>normalrain</button>
            <button onClick = {()=>{
                if (playSound6 === 1){
                    playSound6 = 0;
                    soundrainonglass.play()
                } else {
                    playSound6 = 1;
                    soundrainonglass.pause();
                }
            }}>rainonglass</button>
            <button onClick = {()=>{
                if (playSound7 === 1){
                    playSound7 = 0;
                    soundrainonumbrella.play()
                } else {
                    playSound7 = 1;
                    soundrainonumbrella.pause();
                }
            }}>rainonumbrella</button>
            <button onClick = {()=>{
                if (playSound8 === 1){
                    playSound8 = 0;
                    soundthunder.play()
                } else {
                    playSound8 = 1;
                    soundthunder.pause();
                }
            }}>thunder</button>
        </div>
    )
}

export default AudioPlayer;