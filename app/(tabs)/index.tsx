import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      {/* ================= Header ================= */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 16,
          backgroundColor: "#FFFFFF",
          borderBottomWidth: 1,
          borderBottomColor: "#E5E7EB",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 12,
              backgroundColor: "#E6F7F7",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <Feather name="package" size={22} color="#077A7D" />
          </View>

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "#111827",
              }}
            >
              Inventory
            </Text>

            <Text
              style={{
                fontSize: 13,
                color: "#6B7280",
                marginTop: 2,
              }}
            >
              Management System
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 12,
            backgroundColor: "#FEE2E2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="log-out" size={22} color="#DC2626" />
        </TouchableOpacity>
      </View>

      {/* ================= Title ================= */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Dashboard
        </Text>

        <Text
          style={{
            marginTop: 4,
            fontSize: 15,
            color: "#6B7280",
          }}
        >
          Ringkasan Inventory Hari Ini
        </Text>
      </View>

      {/* ================= Cards ================= */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          rowGap: 16,
        }}
      >
        {/* Total Barang */}
        <View
          style={{
            width: "47%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 18,
            elevation: 4,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          <Feather name="box" size={28} color="#2563EB" />

          <Text
            style={{
              marginTop: 14,
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Total Barang
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 30,
              fontWeight: "700",
              color: "#111827",
            }}
          >
            120
          </Text>
        </View>

        {/* Total Kategori */}
        <View
          style={{
            width: "47%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 18,
            elevation: 4,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          <Feather name="layers" size={28} color="#16A34A" />

          <Text
            style={{
              marginTop: 14,
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Total Kategori
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 30,
              fontWeight: "700",
              color: "#111827",
            }}
          >
            15
          </Text>
        </View>

        {/* Total Stok */}
        <View
          style={{
            width: "47%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 18,
            elevation: 4,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          <Feather name="archive" size={28} color="#EA580C" />

          <Text
            style={{
              marginTop: 14,
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Total Stok
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 30,
              fontWeight: "700",
              color: "#111827",
            }}
          >
            2.350
          </Text>
        </View>

        {/* Stok Menipis */}
        <View
          style={{
            width: "47%",
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 18,
            elevation: 4,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          <Feather name="alert-triangle" size={28} color="#DC2626" />

          <Text
            style={{
              marginTop: 14,
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Stok Menipis
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 30,
              fontWeight: "700",
              color: "#111827",
            }}
          >
            3
          </Text>
        </View>
      </View>

      <View style={{ padding: 20 }}>
        <View
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "#E2E3E8",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Selamat Datang
          </Text>
          <Text style={{ color: "#6D6F74" }}>
            System manajemen inventory siap membantu anda mengelola stok barang
            dengan lebih efisien
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
