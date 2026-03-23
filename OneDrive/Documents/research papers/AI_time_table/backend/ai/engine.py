import sys, json, random

data = json.load(sys.stdin)

courses = data["courses"]
slots = data["slots"]
rooms = data["rooms"]
mappings = data.get("mappings", [])

# 🔥 teacher mapping
teacher_map = {}
for m in mappings:
    teacher_map[str(m["course_id"])] = str(m["user_id"])

# 🔥 create random timetable
def create_random():
    timetable = []

    days = ["Monday","Tuesday","Wednesday","Thursday","Friday"]

    for day in days:
        for slot in slots:
            course = random.choice(courses)

            timetable.append({
                "course_id": str(course["_id"]),
                "slot_id": str(slot["_id"]),
                "room_id": str(random.choice(rooms)["_id"]),
                "user_id": teacher_map.get(str(course["_id"]), ""),
                "day": day
            })

    return timetable

# 🔥 fitness function
def fitness(tt):
    score = 100
    used = set()

    for t in tt:
        key = (t["slot_id"], t["room_id"])

        # ❌ room conflict
        if key in used:
            score -= 10
        used.add(key)

    return score

# 🔥 crossover
def crossover(p1, p2):
    cut = len(p1)//2
    return p1[:cut] + p2[cut:]

# 🔥 mutation
def mutate(tt):
    for t in tt:
        if random.random() < 0.1:
            t["slot_id"] = str(random.choice(slots)["_id"])
    return tt

# 🔥 initial population
population = [create_random() for _ in range(20)]

# 🔥 evolution loop
for _ in range(50):
    population = sorted(population, key=fitness, reverse=True)

    new_pop = population[:5]

    while len(new_pop) < 20:
        p1, p2 = random.sample(population[:10], 2)
        child = crossover(p1, p2)
        child = mutate(child)
        new_pop.append(child)

    population = new_pop

# 🔥 best solution
best = max(population, key=fitness)

print(json.dumps(best))