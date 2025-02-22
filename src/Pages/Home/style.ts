import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooter: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooterText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 36,
  },
  cardDetails: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    height: 120,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeaderText: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  cardDetailsTextValue: {
    color: "#FFF",
    fontSize: 36,
    lineHeight: 54,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    paddingTop: 32,
  },
  footerText: {
    marginLeft: 50,
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  footerScrollCardContainer: {
    width: "100%",
    height: 300,
    paddingHorizontal: 19,
  },
  footerCard: {
    marginTop: 37,
    marginLeft: 8,
    width: 100,
    height: 127,
    elevation: 5,
    borderRadius: 27,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 15,
  },
  footerCardText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default styles;
