import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import boleto from "../../Assets/boleto.png";
import dinheiro from "../../Assets/dinheiro.png";
import Logo from "../../Assets/logo.png";
import Mastercard from "../../Assets/mastercard.png";
import pix from "../../Assets/pix.png";
import Setting from "../../Assets/setting.png";
import Wallet from "../../Assets/Wallet.png";
import styles from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={Logo} />
          <Image source={Setting} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={Mastercard} />
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Felipe Menegueli</Text>
            <View />
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo</Text>
            <Image source={Wallet} />
          </View>
          <Text style={styles.cardDetailsTextValue}>R$99.999,99</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>?</Text>
        <ScrollView
          style={styles.footerScrollCardContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer um Pix</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={boleto} />
            <Text style={styles.footerCardText}>Pagar um boleto</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={dinheiro} />
            <Text style={styles.footerCardText}>Fazer um depósito</Text>
          </View>
          <View style={styles.footerCard}></View>
        </ScrollView>
      </View>
    </View>
  );
}
