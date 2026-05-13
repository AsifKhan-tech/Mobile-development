import { Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
        >
          {/* Whole Screen view */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 24,
              backgroundColor: "#eef2ff",
            }}
          >
            {/* Content Screen */}
            <View
              style={{
                width: "100%",
                maxWidth: 420,
                backgroundColor: "#ffffff",
                borderRadius: 24,
                padding: 28,
                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 20,
                shadowOffset: { width: 0, height: 10 },
                elevation: 8,
              }}
            >
              {/* Top heading */}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "700",
                  marginBottom: 10,
                  color: "#111827",
                  textAlign: "center",
                }}
              >
                Welcome back
              </Text>

              {/* Sub-heading */}
              <Text
                style={{
                  fontSize: 15,
                  color: "#6b7280",
                  marginBottom: 24,
                  textAlign: "center",
                }}
              >
                Sign in to continue to your account.
              </Text>

              {/* Label Email */}
              <View style={{ marginBottom: 16 }}>
                <Text
                  style={{
                    marginBottom: 8,
                    color: "#4b5563",
                    fontSize: 14,
                    fontWeight: "600",
                  }}
                >
                  Email Address
                </Text>

                {/* Email input box */}
                <View
                  style={{
                    width: "100%",
                    height: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: emailFocused ? "#22c55e" : "#d1d5db",
                    borderRadius: 14,
                    backgroundColor: "#f8fafc",
                    paddingHorizontal: 12,
                    shadowColor: emailFocused ? "#22c55e" : "#000",
                    shadowOpacity: emailFocused ? 0.18 : 0.08,
                    shadowRadius: emailFocused ? 10 : 4,
                    shadowOffset: { width: 0, height: 4 },
                    elevation: emailFocused ? 3 : 1,
                  }}
                >
                  <Feather
                    name="mail"
                    size={20}
                    color={emailFocused ? "#22c55e" : "#9ca3af"}
                    style={{ marginRight: 12 }}
                  />
                  <TextInput
                    placeholder="Email or password"
                    placeholderTextColor="#9ca3af"
                    autoCapitalize="none"
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    style={{
                      flex: 1,
                      height: "100%",
                      color: "#111827",
                    }}
                  />
                </View>
              </View>

              {/* Label Password  */}
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    marginBottom: 8,
                    color: "#4b5563",
                    fontSize: 14,
                    fontWeight: "600",
                  }}
                >
                  Password
                </Text>

                {/* Password input box  */}
                <View
                  style={{
                    width: "100%",
                    height: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: passwordFocused ? "#6bc16b" : "#d1d5db",
                    borderRadius: 14,
                    backgroundColor: "#f8fafc",
                    paddingHorizontal: 12,
                    shadowColor: passwordFocused ? "#6bc16b" : "#000",
                    shadowOpacity: passwordFocused ? 0.18 : 0.08,
                    shadowRadius: passwordFocused ? 10 : 4,
                    shadowOffset: { width: 0, height: 4 },
                    elevation: passwordFocused ? 3 : 1,
                  }}
                >
                  <Feather
                    name="lock"
                    size={20}
                    color={passwordFocused ? "#6bc16b" : "#9ca3af"}
                    style={{ marginRight: 12 }}
                  />
                  <TextInput
                    placeholder="Enter your password"
                    placeholderTextColor="#9ca3af"
                    secureTextEntry
                    autoCapitalize="none"
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    style={{
                      flex: 1,
                      height: "100%",
                      color: "#111827",
                    }}
                  />
                </View>
              </View>

              {/* Sign in button  */}
              <Pressable
                style={{
                  width: "100%",
                  backgroundColor: "#6bc16b",
                  borderRadius: 14,
                  paddingVertical: 14,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#ffffff", fontSize: 16, fontWeight: "700" }}
                >
                  Sign In
                </Text>
                <Feather
                  name="arrow-right"
                  size={18}
                  color="#ffffff"
                  style={{ marginLeft: 10 }}
                />
              </Pressable>

              {/* Start social media container  */}
              <View style={{ marginTop: 20, alignItems: "center" }}>
                <Text
                  style={{
                    color: "#6b7280",
                    marginBottom: 16,
                    fontSize: 13,
                  }}
                >
                  Or continue with
                </Text>

                {/* Social media section  */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 16,
                  }}
                >
                  {/* GitHub Icon */}
                  <Pressable
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "#f8fafc",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#e5e7eb",
                    }}
                  >
                    <Feather name="github" size={20} color="#111827" />
                  </Pressable>

                  {/* Google Icons  */}
                  <Pressable
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "#f8fafc",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#e5e7eb",
                    }}
                  >
                    <FontAwesome name="google" size={20} color="#db4437" />
                  </Pressable>

                  {/* Instagram Icon  */}
                  <Pressable
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: "#f8fafc",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#e5e7eb",
                    }}
                  >
                    <Feather name="instagram" size={20} color="#C13584" />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
