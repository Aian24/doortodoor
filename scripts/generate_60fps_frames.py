import cv2
import os
import numpy as np
from PIL import Image

def generate_60fps_frames():
    video_path = "public/relaunch-hero.mp4"
    output_dir = "public/hero_frames"
    os.makedirs(output_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error: Cannot open", video_path)
        return
        
    raw_frames = []
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        raw_frames.append(rgb)
    cap.release()
    
    orig_count = len(raw_frames)
    print(f"Loaded {orig_count} original frames.")
    
    target_fps = 60.0
    duration = orig_count / 24.0 # 10.0 seconds
    target_count = int(round(duration * target_fps)) # 600 frames
    
    print(f"Generating {target_count} frames at {target_fps} FPS (High Quality WebP quality=92)...")
    
    # Clean previous frames if count changed
    for f in os.listdir(output_dir):
        if f.startswith("frame_") and f.endswith(".webp"):
            try:
                os.remove(os.path.join(output_dir, f))
            except:
                pass
                
    for out_idx in range(target_count):
        # Calculate source float position
        pos = (out_idx / (target_count - 1)) * (orig_count - 1)
        idx_low = int(pos)
        idx_high = min(idx_low + 1, orig_count - 1)
        weight_high = pos - idx_low
        weight_low = 1.0 - weight_high
        
        if weight_high < 0.001:
            blended = raw_frames[idx_low]
        elif weight_low < 0.001:
            blended = raw_frames[idx_high]
        else:
            # High precision float blend
            blended = cv2.addWeighted(raw_frames[idx_low], weight_low, raw_frames[idx_high], weight_high, 0)
            
        img = Image.fromarray(blended)
        filename = f"frame_{out_idx:03d}.webp"
        out_path = os.path.join(output_dir, filename)
        
        # Save high quality WebP
        img.save(out_path, "WEBP", quality=92, method=5)
        
        if (out_idx + 1) % 50 == 0 or out_idx == target_count - 1:
            print(f"Progress: {out_idx + 1}/{target_count} frames generated...")
            
    print(f"Successfully generated all {target_count} 60FPS frames in {output_dir}!")

if __name__ == "__main__":
    generate_60fps_frames()
