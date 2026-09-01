import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BaseScreen({ children }: { children: React.ReactNode }) {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.content}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, padding: 16 },
});