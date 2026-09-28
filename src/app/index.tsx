import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const students = [
  {
    id: "s1",
    name: "Ana Cruz",
    course: "IT313",
    units: 21,
    isFullLoad: true,
  },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    course: "IT313",
    units: 18,
    isFullLoad: true,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units: {units}</Text>

      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

function StudentRoster() {
  const [roster, setRoster] = useState(students);

  const reorderStudents = () => {
    setRoster([...roster].reverse());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.count}>Total Students: {roster.length}</Text>

      <Button title="Reorder Students" onPress={reorderStudents} />

      <View style={styles.list}>
        {roster.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </View>
    </View>
  );
}

export default function Index() {
  return <StudentRoster />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  count: {
    fontSize: 18,
    marginBottom: 15,
  },

  list: {
    marginTop: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  fullLoad: {
    marginTop: 8,
    fontWeight: "bold",
  },
});
