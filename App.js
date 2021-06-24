import * as React from 'react';

import { Button, TextInput, View } from 'react-native';

export default class App extends React.Component {
  sealteamsix() {
    alert('GET READY TO DIE');
  }

  deathsentence() {
    alert(' GET READY TO BE SENTENCED TO DEATH');
  }

  executioner() {
    alert('GET READY TO BE EXECUTED');
  }

  sniper() {
    alert('GET READY TO GET SNIPED');
  }

  americangov() {
    alert('GET READY TO BE RAIDED BY THE AMERICAN GOVERNMENT');
  }

  nuclearstrike() {
    alert('BRACE FOR IMPACT');
  }

  phonecall() {
    alert('PICK UP THE CALL THAT YOU WILL GEt IN THE NEXT 30 SECONDS');
  }

  anabelle() {
    alert('GET READY TO GET HAUNTED BY ANABELLE');
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.deathsentence}
          color="#9999ff"
          title="IF YOU PRESS THIS BUTTON THE PRESIDENT OF YOUR OWN COUNTRY WILL BE FORCED TO SENTENCE YOU TO DEATH"
        />

        <Button
          onPress={this.executioner}
          color="#800000"
          title="IF YOU PRESS THIS BUTTON IF YOU PRESS THIS BUTTON A PROFFESIONAL EXECUTIONER WILL APROACH YOUR HOUSE AND EXECUTE YOUR HEAD OFF"
        />

        <Button
          onPress={this.sniper}
          color="#ff6600"
          title="IF YOU PRESS THIS BUTTON THE SNIPER ON THE BULDING ACROSS THE STREET WILL SNIPE YOUR HEAD OFF"
        />

        <Button
          onPress={this.americangov}
          color="#33cc33"
          title="IF YOU PRESS THIS BUTTON THE AMERICAN GOVERNMENT WILL DO A RAID AT YOUR HOUSE"
        />

        <Button
          onPress={this.nuclearstrike}
          title="IF YOU PRESS THIS BUTTON THEN THERE WILL BE A NUCLEAR STRIKE AT YOUR HOME IN THE NEXT 300 SECONDS"
        />

        <Button
          onPress={this.phonecall}
          color="#ff0000"
          title="IF YOU PRESS THIS BUTTON YOU WILL GET A PHONE CALL WHICH WILL HACK YOUR PHONE AND BLAST IT INTO  PIECES"
        />

        <Button
          onPress={this.anabelle}
          color="#000"
          title="IF U PRESS THIS BUTTON ANABELLE WILL PERSONALLY COME TO HAUNT YOU FOR YOUR LIFE IN THE NEXT 30 SECONDS"
        />

        <Button
          onPress={this.sealteamsix}
          color="#003"
          title="IF YOU PRESS THIS BUTTON TWO HELICOPTERS FULL OF AMERICAN SWAT SEAL TEAM SIX SOLDIERS WILL INFILTRATE YOUR HOUSE AND ASSASINATE EVRYBODY THEY SEE"
        />
      </View>
    );
  }
}
