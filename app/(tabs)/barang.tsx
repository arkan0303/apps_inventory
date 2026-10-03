import Header from "@/components/header";
import { useState } from "react";
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Barang = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View>
          <Text>Daftar Barang</Text>
          <Text>Kelola Product Inventory</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text>Tambah Barang</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          padding: 20,
        }}
      >
        <View
          style={{
            padding: 20,
            alignItems: "center",
            borderWidth: 4,
            borderColor: "#e5e7eb",
            borderRadius: 20,
            gap: 10,
            marginTop: 50,
          }}
        >
          <View>icon</View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Belum Ada Kategori
          </Text>
          <Text style={{ fontSize: 14, color: "#666666" }}>
            Buat Kategori untuk mengorganisir barang
          </Text>
          <Button color="#006D58" title="Tambah Kategori" />
        </View>
      </View>

      <Modal
        animationType="slide"
        visible={visible}
        transparent={true}
        onRequestClose={() => setVisible(false)}
      >
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text>Tambah Barang</Text>
            <Button title="Close" onPress={() => setVisible(false)} />

            <View style={{ gap: 10, padding: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "#333" }}>
                Nama Barang
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#006D58",
                  borderRadius: 8,
                  padding: 10,
                }}
                placeholder="isi nama barang nya disini"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Barang;
