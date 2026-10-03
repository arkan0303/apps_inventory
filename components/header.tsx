import { Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
